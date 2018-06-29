var myNumber = 42;
var myName = "Arthur";
var temp = 0;
temp = myNumber;
myNumber = myName;
myName = temp;

for (var x = -52; x<=1066; x++){
    console.log(x);
}

function beCheerful() {
    for (var x = 1; x < 99; x++) {
        if (x < 99) {
          console.log("good morning!");
        }
      }
}

for (var x = -300; x < 1; x+3) {
    if (x == -3 || x == -6) {
    continue}
    console.log(i);
    }

var x = 2000
    while (x <= 5280){
        console.log(x);
        x++;
    }

function birthday(month, day) {
     if((month == 5 && day == 26) || (day == 5 && month == 26)) {
        console.log("How did you know?");
        }
    else
        {
        console.log("Just another day...");
        }
      }

function leapYear(x = year) {
    if(x % 100 != 0 && x % 4 == 0 || x % 400 == 0) {
        console.log("This is a leap year");
        }
    else (console.log("This is not a leap year"));
    }

function multiplesOfFive() {
    var count = 0;
    for(var x = 512; x < 4097; x++) {
        if(x % 5 == 0) {
            console.log(i);
            count++;
          }
        }
        console.log(count);
      }
    multiplesOfFive();

function multOfSix() {
    var x = 6;
    while (i < 60001) {
    if(i % 6 == 0) {
        console.log(i);
    }
        i++;
        }
    }
    multOfSix();

function countingDojo() {
    for (var i = 1; i < 101; i++) {
        if(i % 5 === 0 && i % 10 === 0) {
            console.log("Coding Dojo");
          }
          else if (i % 5 === 0) {
            console.log("Coding");
          }
          else {console.log(i);
            }
          }
        }
countingDojo();

function hugeSum() {
    var sum = 0;
    for (var x = -300000; x < 300001; x++) {
    if (x % 2 != 0) {
      sum += i;
      }
    }
    console.log(sum);
  }
  hugeSum();

var x = 2016;

while (x > 0) {
    console.log(i); {
      x-=4;
    }
}

function count(lowNum, highNum, mult) {


    for (var i = highNum; i >= lowNum; i = i - mult) {
      console.log(i);
    }
  }
  
  count(2, 9, 3);

function final(param1, param2, param3, param4) {
    var i = param2;
    while(i <= param3) {
      if(i != param4 && i % param1 == 0){
    console.log(i);
    }
    i++;
  }
}
final(3, 5, 17, 9);

function countdown(x){
    var array = [];
    for (var i = x; x >= 0; i--){
        array.push(i);
    }
}

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

function firstLength(arr) {
    return arr[0]+arr.length;
  }

function valuesGreater(arr) {
    var count = 0;
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] > arr[1]) {
        console.log(arr[x]);
        count++
      }
    }
    return count;
  }

function valuesGreaterGeneral(arr) {
    if (arr.length <= 1) {
      console.log("ERROR: This array does not have a second value!");
      return -1;
    } else {
      var newarr = [];
      for (var x = 0; x < arr.length; x++) {
        if (arr[x] > arr[1]) {
          newarr.push(arr[x]);
        }
      }
      return newarr;
    }
  }

function thisValueThat (x,y){
    if (x == y) {
        console.log("Jinx!");
        }
    else {
            var newarr = [];
            for (var x = 0; x < num1; x++) {
              newarr.push(num2);
            }
    }
}

function rightFit(arr) {
      if (arr[0] > arr.length) {
        console.log("Too big!");
      } else if (arr[0] < arr.length) {
        console.log("Too small!");
      } else {
        console.log("Just right!");
      }
    }

function fahrenheitToCelsius(f) {
    var c = 0;
    c = (f-32)*(5/9);
    return c;
    }

function celsiusToFahrenheit(c) {
    var f = 0;
    f = ((9/5)*c)+32;
    return f;
    }

function biggie(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            arr[x] = "big";
          }
        }
        return arr;
      }

function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
           low = arr[i];
        }
        if (arr[i] > high) {
           high = arr[i];
        }
    }
    console.log(low);
    return high;
    }

    function printOneReturnAnother (arr) {
        console.log(arr[arr.length - 2]);
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]%2 != 0) {
            return arr[i];
          }
        }
      }

function doubleVision(arr) {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
        newarr.push(arr[x]*2);
    }
    return newarr;
    }

function countPositive(arr) {
    var count = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
        count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
    }

function evensAndOdds(arr) {
    var evencount = 0;
    var oddcount = 0;
        for (var x = 0; x < arr.length; x++) {
          if (arr[x]%2 == 0) {
            oddcount = 0;
            evencount++;
            if (ecount == 3) {
              evencount = 0;
              console.log("Even more so!");
            }
          } else {
            evencount = 0;
            oddcount++;
            if (oddcount == 3) {
              oddcount = 0;
              console.log("That's odd!");
            }
          }
        }
    }

function increment(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (x % 2 != 0) {
          arr[x] += 1;
        }
          console.log(arr[x]);
        }
        return arr;
      }

function prevLength (arr) {
    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
        }
        arr[0] = 0;
        return arr;
      }

function addSeven (arr) {
        var newarr = [];
        for (i = 1; i < arr.length; i++) {
          newarr.push(arr[i]+7);
        }
        return newarr;
      }

function reverse(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length-1-i] = temp;
        }
        return arr;
      }

function negativeOutlook(arr) {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
          newarr.push(arr[x] * -1);
        } 
        else {
            newarr.push(arr[x]);
          }
        }
        return newarr;
      }

function alwaysHungry(arr) {
    var hungry = 1;
    for (var x = 0; x < arr.length; x++) {
          if (arr[x] == "food") {
            console.log("yummy");
            hungry = 0;
          }
        }
        if (hungry == 1)  {
          console.log("I'm hungry");
        }
        return 0;
      }

function swapTowardsCenter(arr) {
    for (var x = 0; x < arr.length/2; x+=2) {
        var temp = arr[x];
        arr[x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
        }
    return arr;
    }

function scaleArray(arr, num) {
    for (var x = 0; x < arr.length; x++) {
        arr[x] *= num;
    }
    return arr;
    }