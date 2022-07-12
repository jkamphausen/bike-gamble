#include <Encoder.h>
#include <Servo.h>

const int DT = 5;
const int CLK = 6;
const int SW = 2;

const int servoPIN = 8;
const int sensorAutoPIN = 2;
const int sensorBikePIN = 3;

//int tAutoStatus = 0;
//int tBikeStatus = 0;

const int posNeutral = 88;
const int posAutoDropped = 0;
const int posBikeDropped = 180;

Encoder myEncoder(DT, CLK);
Servo servo;

const unsigned long timePeriod = 1000;
unsigned long startTime;
long startPosition;
long prevPosition;
float currentSpeed;
bool keyDropping = false;
int pause = 0;
boolean keyIsLifted = false;

void setup() {
  pinMode(sensorAutoPIN, INPUT);
  pinMode(sensorBikePIN, INPUT);
  servo.attach(servoPIN);
  servo.write(posNeutral);
  Serial.begin(9600);
  startPosition = myEncoder.read();
  prevPosition = startPosition;
  startTime = millis();
}

void loop() {
  unsigned long now = millis();
  long newPosition = myEncoder.read();
  
  if(pause > 0 || keyIsLifted){
    isKeyLifted();
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
    servo.write(posBikeDropped);
    delay(2500);
    isKeyLifted();
    servo.write(posNeutral);
    delay(1000);
  } else {
    Serial.println("Auto key dropped!");
    servo.write(posAutoDropped);
    delay(2500);
    isKeyLifted();
    servo.write(posNeutral);
    delay(1000);
  }
  keyDropping = false;
}

boolean isKeyLifted(){
    int tAutoStatus=digitalRead(sensorAutoPIN); 
    int tBikeStatus=digitalRead(sensorBikePIN);
    if(tAutoStatus == LOW){
      Serial.println("Auto key taken");
      keyIsLifted = true;
      return true;
    }
    if(tBikeStatus == LOW){
      Serial.println("Bike key taken");
      keyIsLifted = true;
      return true;
    }
    keyIsLifted = false;
    return false;
}

//  long newPosition = myEncoder.read();
//  if (newPosition != oldPosition) {
//    oldPosition = newPosition;
//    Serial.println(newPosition);
//  }
//  int tAutoStatus=digitalRead(TasterAuto); 
//  int tBikeStatus=digitalRead(TasterBike); 
//  if (tAutoStatus == LOW){
//    Serial.println("Auto key taken");
//  }
//  if (tBikeStatus == LOW){
//    Serial.println("Bike key taken");
//  }
