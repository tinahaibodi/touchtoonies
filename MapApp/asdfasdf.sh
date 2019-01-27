#!/bin/bash
echo [ > data.json
for ((i=1;i<=50000;i+=19))
do
  echo $i
  curl -s -X GET "https://conuhacks-playback-api.touchtunes.com/plays?startDate=2018-02-19T21:00:00Z&endDate=2018-12-19T22:00:00Z&offset=$i" -H 'client-secret: 9923ac9b-8fd3-421f-b0e5-952f807c6885' >> data.json
 echo , >> data.json
done
echo ] >> data.json
