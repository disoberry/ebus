# Generated by Django 4.2.1 on 2023-11-28 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authCont', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuserm',
            name='first_name',
            field=models.CharField(blank=True, default='UserFirst', max_length=255),
        ),
        migrations.AlterField(
            model_name='customuserm',
            name='last_name',
            field=models.CharField(blank=True, default='UserLast', max_length=255),
        ),
    ]
