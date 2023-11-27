from django.db import models
from authCont.models import CustomUserM
class BusTableM(models.Model):
    price = models.IntegerField()
    raceNum = models.IntegerField()
    fromWhere = models.TextField()
    toWhere = models.TextField()
    seats = models.IntegerField()
    freeSeats = models.IntegerField()
    platform = models.IntegerField()
    status = models.BooleanField()
    fromWhen = models.DateTimeField()
    toWhen = models.DateTimeField()

    bus_name = models.TextField(max_length=255, null=False)

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


class Ticket(models.Model):
    seat_number = models.IntegerField(null=False)
    bus_name_ticket = models.ForeignKey(BusTableM, on_delete=models.CASCADE)
    ticket_owner = models.ForeignKey(CustomUserM, on_delete=models.CASCADE)