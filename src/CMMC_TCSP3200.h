/******************************************************************
 * TCS3200 Color sensor library for KB-IDE by chiang mai maker club
 ******************************************************************/

#ifndef cmmc_tcsp3200_h
#define cmmc_tcsp3200_h

#include <Arduino.h>


#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

class COLOR
{
public:
  COLOR();
  ~COLOR();

  void begin(uint8_t _out, uint8_t _s0, uint8_t _s1, uint8_t _s2, uint8_t _s3);
  void scaling(uint8_t _mode);
  unsigned int redColor();
  unsigned int greenColor();
  unsigned int blueColor();
protected:

private:
  int pin_S0;
  int pin_S1;
  int pin_S2;
  int pin_S3;
  int pin_OUT;

};

#endif /*cmmc_linetracking_h*/
