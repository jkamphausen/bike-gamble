/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * This example code is in the public domain.
 */

#include <Encoder.h>

// Change these two numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(5, 6);
int TasterAuto = 3;
int TasterBike = 2;
//   avoid using pins with LEDs attached

void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
  pinMode(TasterAuto, INPUT);
  pinMode(TasterBike, INPUT);
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
  int tAutoStatus=digitalRead(TasterAuto); 
  int tBikeStatus=digitalRead(TasterBike); 
  if (tAutoStatus == LOW){
    Serial.println("Auto key taken");
  }
  if (tBikeStatus == LOW){
    Serial.println("Bike key taken");
  }
}
