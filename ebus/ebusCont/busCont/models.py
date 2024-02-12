from django.db import models
from authCont.models import CustomUserM
from django.db.models.signals import post_save
from django.dispatch import receiver



class BusTableM(models.Model):
    price = models.IntegerField()
    # raceNum = models.IntegerField()
    fromWhere = models.TextField()
    toWhere = models.TextField()




    platform = models.IntegerField()
    status = models.BooleanField()



    # ch8 = "8:00"
    # ch9 = "9:00"
    # ch10 = "10:00"
    # ch11 = "11:00"
    # ch12 = "12:00"
    # ch13 = "13:00"
    # ch14 = "14:00"
    #
    # ROUTE_SCHEDULE_STAMPS = [
    #     (ch8,"8:00"),
    #     (ch9,"9:00"),
    #     (ch10,"10:00"),
    #     (ch11,"11:00"),
    #     (ch12,"12:00"),
    #     (ch13,"13:00"),
    #     (ch14,"14:00"),
    # ]
    #
    #
    # routeSchedule = models.TextField(choices=ROUTE_SCHEDULE_STAMPS, default="c12")




class BusTrip(models.Model):
    seats = models.IntegerField()
    freeSeats = models.IntegerField()
    freeSeats = models.ManyToManyField('SeatN', blank=True)

    bus_table = models.ForeignKey(BusTableM, on_delete=models.CASCADE)
    timeFrom = models.TimeField()
    timeTo = models.TimeField()
    date = models.DateField()

class Ticket(models.Model):

    seat_number = models.IntegerField(null=False)
    trip_race_ticket = models.ForeignKey(BusTrip, on_delete=models.CASCADE)
    ticket_owner = models.ForeignKey(CustomUserM, on_delete=models.CASCADE)
    ticket_status = models.BooleanField()


@receiver(post_save, sender=BusTrip)
def create_free_seats(sender, instance, created, **kwargs):
    if created:
        # Automatically create SeatN instances for available seats
        for seat_number in range(1, instance.seats + 1):
            seat_instance = SeatN.objects.create(bus_table=instance, seat_number=seat_number)
            instance.freeSeats.add(seat_instance)

# class SeatN(models.Model):
#     bus_race = models.ForeignKey(BusTrip, on_delete=models.CASCADE)

class SeatN(models.Model):
    bus_table = models.ForeignKey(BusTrip, on_delete=models.CASCADE)
    seat_number = models.IntegerField()
