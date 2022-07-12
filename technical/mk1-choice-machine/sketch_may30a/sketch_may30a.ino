#include <Encoder.h>
#include <Servo.h>

const int CLK = 6;      // Definition der Pins. CLK an D6, DT an D5.
const int DT = 5;
const int SW = 2;

Encoder myEncoder(DT, CLK);
Servo servo;

const unsigned long timePeriod = 2000;
unsigned long startTime;
long startPosition;
float currentSpeed;
bool keyDropping = false;

void setup() {
  servo.attach(8);
  servo.write(0);
  Serial.begin(9600);
  startPosition = myEncoder.read();
  startTime = millis();
  //  pinMode(SW, INPUT);   // Hier wird der Interrupt installiert.
  //  attachInterrupt(digitalPinToInterrupt(SW), KeyInterrupt, CHANGE);
}

long oldPosition = -999;

void loop() {
  unsigned long now = millis();
  long newPosition = myEncoder.read();

  if (now - startTime >= timePeriod ) {
    // time to calculate average encoder speed
    float speed = (newPosition - startPosition) / (float)timePeriod;
    currentSpeed = speed;
    Serial.print( "Avg speed is ");
    Serial.println( speed, 4 );

    startTime = now;
    startPosition = newPosition;

    if (newPosition  != oldPosition) {
      oldPosition = newPosition;
      Serial.println(newPosition);

      if (!keyDropping) {
        if (currentSpeed < 0.0240) {
          Serial.println( "Avg speed is slow");
          dropKey(5000, servo);
        } else {
          Serial.println( "Avg speed is FAST!");
          dropKey(2500, servo);
        }
      }

    }
  }

}

void dropKey(int seconds, Servo servo) {
  keyDropping = true;
  Serial.println("Key dropped!");
  // delay(500);
  servo.write(90);
  delay(seconds);
  servo.write(0);
  delay(1000);
  keyDropping = false;
  Serial.println("Folded back!");
}

boolean posHasChanged(long newPosition) {
  if (newPosition  != oldPosition) {
    return true;
  } else {
    return false;
  }
}
