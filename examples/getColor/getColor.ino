#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "CMMC_TCSP3200.h"

COLOR color1;

void setup()
{
  color1.begin(23, 26, 27, 18, 19);
  color1.scaling(2);
  Serial.begin(115200);
}
void loop()
{
  Serial.print(((String("R: ")+String((color1.redColor())))));
  Serial.print(((String(" G:")+String((color1.greenColor())))));
  Serial.println(((String(" B:")+String((color1.blueColor())))));
  delay(250);
}
