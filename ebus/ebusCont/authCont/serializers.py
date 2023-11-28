from rest_framework import serializers
from .models import CustomUserM
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUserM
        fields = ('id', 'email', 'first_name', 'last_name', 'password')


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUserM
        fields = ('first_name', 'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUserM.object.create_user(first_name=validated_data['first_name'],
                                            last_name=validated_data['last_name'],
                                            email=validated_data['email'],
                                            password=validated_data['password'],)
        return user

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUserM
        fields = '__all__'
        extra_kwargs = {
            'password': {'required': True}
        }

    def validate(self, attrs):
        email = attrs.get('email', '').strip().lower()
        if CustomUserM.object.filter(email=email).exists():
            raise serializers.ValidationError('User with this email id already exists.')
        return attrs

    def create(self, validated_data):
        user = CustomUserM.object.create_user(**validated_data)
        return user

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUserM
        fields = ('first_name', 'last_name', 'email', 'password')

    def update(self, instance, validated_data):
        password = validated_data.pop('password')
        if password:
            instance.set_password(password)
        instance = super().update(instance, validated_data)
        return instance




class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)

    def validate(self, attrs):
        email = attrs.get('email').lower()
        password = attrs.get('password')

        if not email or not password:
            raise serializers.ValidationError("Please give both email and password.")

        if not CustomUserM.object.filter(email=email).exists():
            raise serializers.ValidationError("Email does not exists.")

        user = authenticate(requests=self.context.get('request'), email = email,
                                password=password)

        if not user:
            raise serializers.ValidationError("Wrong Credenticals")

        attrs['user'] = user
        return attrs
