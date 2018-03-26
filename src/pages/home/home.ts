import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var eGHL :any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  eGHLData = {
	serviceId: 'SIT',
	password: 'sit12345'
  }

    pay(){
    //alert(eGHL.version);
    var orderId = Math.floor(Math.random() * 90000) + 10000;
    const data = {
        CurrencyCode : 'MYR',
        PaymentMethod : 'CC',
        TransactionType : 'SALE',
        PaymentGateway: 'https://test2pay.ghl.com/IPGSG/Payment.aspx', // Payment gateway URL given by eGHL
        ServiceID :this.eGHLData.serviceId, //Merchant Code or Service ID given by eGHL
        Password: this.eGHLData.password, // Merchant password given by eGHL
        PaymentID : orderId, // Unique string for each payment
        OrderNumber : orderId, // Order number to refer current payment, can duplicate.
        PaymentDesc : "Imperial trial 2",
        MerchantReturnURL :  "SDK", // redirect when payment complete.
        Amount : "1.00", // e.g. 1000.00 for IDR
                      // Invalid format: 1,000.00 or 1000
        CustName : "Loh",
        CustEmail :  "mail@gmail.com",
        CustPhone : '01162347377' ,//String(this.userDetails.mobileNo).toString(),
        MerchantName : "Merchant Name",
        CustMAC : "",
        // MerchantApprovalURL : "https://*",
        // MerchantUnApprovalURL : "https://*",
        MerchantCallBackURL : "SDK", // server callback url
        LanguageCode : "EN",
        PageTimeout : "780", // timeout in seconds
        CardHolder : "",
        CardNo : "",
        CardExp : "",
        CardCVV2 : "",
        IssuingBank : "",
        BillAddr : "",
        BillPostal : "",
        BillCity : "",
        BillRegion : "",
        BillCountry : "",
        ShipAddr : "",
        ShipPostal : "",
        ShipCity : "",
        ShipRegion : "",
        ShipCountry : "",
        SessionId : "",
        TokenType : "",
        Token : "",
        Param6 : "",
        Param7 : "",
        EPPMonth : "",
        PromoCode : "",
        ReqToken : "",
        PairingToken : "",
        ReqVerifier : "",
        PairingVerifier : "",
        CheckoutResourceURL : "",
        CardId : "",
        CustIP : "192.168.1.1",
        PreCheckoutId : "",
        PaymentTimeout : -1,
        sdkTimeout: 60, // seconds
        // _finaliseMessage: "Optional message for Finalising Payment (iOS Only)",
        // _cancelMessage: "Optional message for Cancelling Payment (iOS Only)"
    };

    console.log(JSON.stringify(data));
    
    eGHL.makePayment(data,
        function (resp) {
            alert(resp);
        },
        function (err) {
            alert(err);

        }
    );
  }
}
