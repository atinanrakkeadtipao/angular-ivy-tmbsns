import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "สุ่มรางวัล ";
  amount = "";
  value = "";
  total: any;

  total1000: any;
  total500: any;
  total300: any;
  total100: any;
  total50: any;
  total10: any;
  total0: any;

  ngOnInit() {}

  clickTestRate() {
    let test = "";
    this.total = 0;
    this.total0 = 0;
    this.total10 = 0;
    this.total50 = 0;
    this.total100 = 0;
    this.total300 = 0;
    this.total500 = 0;
    this.total1000 = 0;

    // const amountInt =
    for (let i = 0; i < +this.amount; i++) {
      // console.log(Math.floor(Math.random() * 100) + 1)
      let num = Math.floor(Math.random() * 100) + 1;
      console.log("เรทที่คุณได้ : " + num);
      if (num == 100) {
        this.total += 1000;
        this.total1000 += 1;
        1;

        console.log("ได้รับ 1000 บาท");
      }
      if (num == 99 || num == 98) {
        this.total += 500;
        this.total500 += 1;

        2;

        console.log("ได้รับ 500 บาท");
      }
      if (num >= 95 && num <= 97) {
        this.total += 300;
        this.total300 += 1;

        3;

        console.log("ได้รับ 300 บาท");
      }
      if (num >= 86 && num <= 94) {
        this.total += 100;
        this.total100 += 1;

        9;

        console.log("ได้รับ 100 บาท");
      }
      if (num >= 76 && num <= 85) {
        this.total += 50;
        this.total50 += 1;

        10;

        console.log("ได้รับ 50 บาท");
      }
      if (num >= 50 && num <= 75) {
        this.total += 10;
        this.total10 += 1;

        26;

        console.log("ได้รับ 10 บาท");
      }
      if (num >= 1 && num <= 49) {
        this.total += 0;
        this.total0 += 1;

        49;

        console.log("ได้รับ 0 บาท");
      }
    }
    console.log(
      "จำนวนครั้งที่ปั่น " +
        this.amount +
        " ครั้ง ยอดรวมที่ได้ " +
        +this.amount * +this.value +
        " บาท "
    );
    console.log("ยอดที่เสีย " + this.total + " บาท ");
    console.log("อกก 1000 " + this.total1000 + " ครั้ง ");
    console.log("อกก 500  " + this.total500 + " ครั้ง ");
    console.log("อกก 300  " + this.total300 + " ครั้ง ");
    console.log("อกก 100  " + this.total100 + " ครั้ง ");
    console.log("อกก 50  " + this.total50 + " ครั้ง ");
    console.log("อกก 10  " + this.total10 + " ครั้ง ");
    console.log("อกก 0  " + this.total0 + " ครั้ง ");
    console.log("กำไร ", +this.amount * +this.value - this.total + " บาท ");
  }
}
