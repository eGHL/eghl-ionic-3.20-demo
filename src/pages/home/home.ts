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
        /*
        * Mandatory payment parameters list:

        * transactionType, paymentMethod, serviceId, paymentId, orderNumber, paymentDesc,
        * merchantReturnUrl, amount, currencyCode, custIp, custName, custEmail, custPhone

        * Check the eGHL documentation for parameter names.

        * [All Field are defined as String], Except paymentTimeout and sdkTimeout.

        * NOTE: Parameter names and spelling follow iOS, wherever the Android and iOS
        * names differ!
        */

        // List of accepted params and some value detail (refer docs for more detail):
        CurrencyCode : 'MYR',  
        PymtMethod : 'ANY',
        TransactionType : 'SALE',
        PaymentGateway: 'https://test2pay.ghl.com/IPGSG/Payment.aspx', // Payment gateway URL given by eGHL
        ServiceID : 'SIT', //Merchant Code or Service ID given by eGHL
        Password: 'sit12345', // Merchant password given by eGHL
        PaymentID : orderId, // Unique string for each payment
        OrderNumber : orderId, // Order number to refer current payment, can duplicate.
        PaymentDesc : 'eGHL Ionic Payment Testing',
        MerchantReturnURL :  'SDK', // redirect when payment complete.
        Amount : '1.00', // e.g. 1000.00 for IDR Invalid format: 1,000.00 or 1000
                        // Invalid format: 1,000.00 or 1000
        CustIP : '', // customer ip address captured by merchant 
        CustName : 'Beta Tester',
        CustEmail : 'Tester@mail.com',
        CustPhone : '60123456789',
        B4TaxAmt : '',
        TaxAmt : '',
        MerchantName : 'ABC Sdn Bhd',
        CustMAC : '',
        MerchantApprovalURL : '',
        MerchantUnApprovalURL : '',
        MerchantCallBackUrl : '', // server callback url is called if any unexpected crash or lost of connection during making payment
        LanguageCode : 'EN',
        PageTimeout : '500', // timeout in seconds
        CardHolder : '',
        CardNo : '',
        CardExp : '',
        CardCVV2 : '',
        IssuingBank : '',
        BillAddr : '',
        BillPostal : '',
        BillCity : '',
        BillRegion : '',
        BillCountry : '',
        HashValue : '',
        ShipAddr : '',
        ShipPostal : '',
        ShipCity : '',
        ShipRegion : '',
        ShipCountry : '',
        SessionID : '',
        TokenType : '',
        Token : '',
        Param6 : '',
        Param7 : '',
        EPPMonth : '',
        PromoCode : '',
        ReqToken : '',
        PairingToken : '',
        ReqVerifier : '',
        PairingVerifier : '',
        CheckoutResourceURL : '',
        CardId : '',
        PreCheckoutId : '',
        PaymentTimeout : -1,
        sdkTimeout: 60, // seconds
        _finaliseMessage: 'Optional message for Finalising Payment (iOS Only)',
        _cancelMessage: 'Optional message for Cancelling Payment (iOS Only)',
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
