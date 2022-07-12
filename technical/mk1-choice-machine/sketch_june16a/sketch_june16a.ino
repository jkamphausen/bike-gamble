#include <Encoder.h>
#include <Servo.h>

const int CLK = 6;      // Definition der Pins. CLK an D6, DT an D5.
const int DT = 5;
const int SW = 2;

Encoder myEncoder(DT, CLK);
Servo servoBike;
Servo servoCar;

const unsigned long timePeriod = 1000;
unsigned long startTime;
long startPosition;
long prevPosition;
float currentSpeed;
bool keyDropping = false;
int pause = 0;

void setup() {
  servoBike.attach(8);
  servoBike.write(0);
  
  servoCar.attach(9);
  servoCar.write(180);
  
  Serial.begin(9600);
  startPosition = myEncoder.read();
  prevPosition = startPosition;
  startTime = millis();
  //  pinMode(SW, INPUT);   // Hier wird der Interrupt installiert.
  //  attachInterrupt(digitalPinToInterrupt(SW), KeyInterrupt, CHANGE);
}

void loop() {
  unsigned long now = millis();
  long newPosition = myEncoder.read();
  
  if(pause > 0){
    if (now - startTime >= timePeriod ){
      Serial.println("paused …");
      startTime = now;
      prevPosition = newPosition;
      pause--; 
    }
  } else {
  
    if (now - startTime >= timePeriod ) {
      // time to calculate average encoder speed
      float speed = abs( (newPosition - prevPosition) / (float)timePeriod );
      Serial.print("Avg speed is ");
      Serial.println( speed, 4 );
  
      if (prevPosition <= (newPosition + 4) && speed != 0) {
        Serial.println(newPosition);
  
        if (!keyDropping) {
          if (currentSpeed <= 0.020) {
            Serial.println( "Avg speed is slow");
            dropKey(40);
            pause = 3;
          } else {
            Serial.println( "Avg speed is FAST!");
            dropKey(60);
            pause = 3;
          }
        }
        
      }
      prevPosition = newPosition;
      startTime = now;
    }
  }
}


void dropKey(int bikeProbability) {
  long randomNum = random(0, 101);
  keyDropping = true;
  if(randomNum <= 60){
    Serial.println("Bike key dropped!");
    servoBike.write(90);
    delay(2500);
    servoBike.write(0);
    delay(1000);
  } else {
    Serial.println("Car key dropped!");
    servoCar.write(90);
    delay(2500);
    servoCar.write(180);
    delay(1000);
  }
  keyDropping = false;
}
