/******************************************************************
 * TCS3200 Color sensor library for KB-IDE by chiang mai maker club
 *****************************************************************/

#include "CMMC_TCSP3200.h"

COLOR::COLOR() {}
COLOR::~COLOR() {}

void COLOR::begin(uint8_t _out, uint8_t _s0, uint8_t _s1, uint8_t _s2, uint8_t _s3)
{
  pin_OUT = _out;
  pin_S0 = _s0;
  pin_S1 = _s1;
  pin_S2 = _s2;
  pin_S3 = _s3;

  pinMode(pin_S0, OUTPUT);
  pinMode(pin_S1, OUTPUT);
  pinMode(pin_S2, OUTPUT);
  pinMode(pin_S3, OUTPUT);
  pinMode(pin_OUT, INPUT);
}

void COLOR::scaling(uint8_t _mode)
{
  if (_mode == 0)
  {
    digitalWrite(pin_S0, LOW);
    digitalWrite(pin_S1, LOW);
  }
  else if (_mode == 1)
  {
    digitalWrite(pin_S0, LOW);
    digitalWrite(pin_S1, HIGH);
  }
  else if (_mode == 2)
  {
    digitalWrite(pin_S0, HIGH);
    digitalWrite(pin_S1, LOW);
  }
  else if (_mode == 3)
  {
    digitalWrite(pin_S0, HIGH);
    digitalWrite(pin_S1, HIGH);
  }
}

unsigned int COLOR::redColor()
{
  digitalWrite(pin_S2,LOW);
  digitalWrite(pin_S3,LOW);
  return pulseIn(pin_OUT, LOW);
}

unsigned int COLOR::greenColor()
{
  digitalWrite(pin_S2,HIGH);
  digitalWrite(pin_S3,HIGH);
  return pulseIn(pin_OUT, LOW);
}

unsigned int COLOR::blueColor()
{
  digitalWrite(pin_S2,LOW);
  digitalWrite(pin_S3,HIGH);
  return pulseIn(pin_OUT, LOW);
}