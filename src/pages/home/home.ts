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
    var orderId = ""+ Math.floor(Math.random() * 90000) + 10000;
    const data = {
      /*
        * Mandatory payment parameters list:
        * TransactionType, PymtMethod, ServiceID, PaymentID, OrderNumber, PaymentDesc, MerchantReturnURL, Amount, CurrencyCode, CustIp, CustName, CustEmail, CustPhone
        * Check the eGHL documentation for parameter names.
        */
        
        TransactionType : "SALE",
        PymtMethod : "ANY",
        CurrencyCode : "MYR",

        PaymentGateway: "https://test2pay.ghl.com/IPGSG/Payment.aspx", // Payment gateway URL given by eGHL
        ServiceID : "SIT", //Merchant Code or Service ID given by eGHL
        Password: "sit12345", // Merchant password given by eGHL
        MerchantName : "ABC Sdn Bhd",
        
        PaymentID : orderId, // Unique string for each payment
        OrderNumber : orderId, // Order number to refer current payment, can duplicate.
        PaymentDesc : "eGHL Ionic Payment Testing",
        Amount : "123.10", // e.g. 1000.00
                       // Invalid format: 1,000.00 or 1000
        CustName : "Beta Tester",
        CustEmail : "Tester@mail.com",
        CustPhone : "60123456789",
        CustMAC : "",
        CustIP : "",
        MerchantReturnURL :  "SDK", // redirect when payment complete.
        MerchantCallBackURL : "https://...", // server to server callback url
        MerchantApprovalURL : "https://...",
        MerchantUnApprovalURL : "https://...",
        LanguageCode : "EN",
        PageTimeout : "600", // eGHL payment page timeout in seconds
        CardHolder : "",
        CardNo : "",
        CardExp : "",
        CardCVV2 : "",
        IssuingBank : "",
        TokenType : "",
        Token : "",
        Param6 : "",
        Param7 : "",
        B4TaxAmt : "",
        TaxAmt : "",
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
        SessionID : "",
        EPPMonth : "",
        PromoCode : "",
        
        // SDK exclusive
        PaymentTimeout : -1, // Android: Force close webview after x seconds
        sdkTimeout: -1, // iOS: Force close webview after x seconds
        _finaliseMessage: "Finalising Payment", // iOS only
        _cancelMessage: "Cancelling Payment", // iOS only
        
        // Masterpass exclusive
        ReqToken : "",
        PairingToken : "",
        ReqVerifier : "",
        PairingVerifier : "",
        CheckoutResourceURL : "",
        CardId : "",
        PreCheckoutId : "",
    };

    eGHL.makePayment(data,
        function (resp) {
            alert(JSON.stringify(resp));
        },
        function (err) {
            alert(JSON.stringify(err));

        }
    );
  }
}
