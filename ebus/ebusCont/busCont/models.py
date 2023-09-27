from django.db import models


class BusTableM(models.Model):
    raceNum = models.IntegerField(max_length=6)
    price = models.IntegerField()
    fromWhere = models.TextField()
    toWhere = models.TextField()
    seats = models.IntegerField()
    freeSeats = models.IntegerField()
    platform = models.IntegerField()
    status = models.BooleanField()
    fromWhen = models.DateTimeField()
    toWhen = models.DateTimeField()

    ch8 = "8:00"
    ch9 = "9:00"
    ch10 = "10:00"
    ch11 = "11:00"
    ch12 = "12:00"
    ch13 = "13:00"
    ch14 = "14:00"

    ROUTE_SCHEDULE_STAMPS = [
        (ch8,"8:00"),
        (ch9,"9:00"),
        (ch10,"10:00"),
        (ch11,"11:00"),
        (ch12,"12:00"),
        (ch13,"13:00"),
        (ch14,"14:00"),
    ]


    routeSchedule = models.TextField(choices=ROUTE_SCHEDULE_STAMPS, default="c12")

