# Generated by Django 4.2.1 on 2023-11-28 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authCont', '0002_alter_customuserm_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuserm',
            name='first_name',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='customuserm',
            name='last_name',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
