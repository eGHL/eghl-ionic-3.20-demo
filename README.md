# eghl-ionic-3.20-demo
This is an example that is using cordova-plugin-eghl on ionic 3.20

function proceedPayment(){
    eGHL.makePayment(
        {
            
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
            CurrencyCode : "MYR" 
            PaymentMethod : "ANY" | "AUTH"
            TransactionType : "SALE"

            PaymentGateway: "https://..." // Payment gateway URL given by eGHL
            ServiceID : "abc" //Merchant Code or Service ID given by eGHL
            Password: "password" // Merchant password given by eGHL

            PaymentId : "P0000001" // Unique string for each payment
            OrderNumber : "P0000001" // Order number to refer current payment, can duplicate.
            PaymentDesc : "eGHL Payment testing"
            MerchantReturnUrl :  "https://*" // redirect when payment complete.
            Amount : "123.10" // e.g. 1000.00 for IDR
                           // Invalid format: 1,000.00 or 1000
            CustIP : "",
            CustName : "Beta Tester"
            CustEmail : "Tester@mail.com"
            CustPhone : "60123456789"
            B4TaxAmt : "",
            TaxAmt : "",
            MerchantName : "ABC Sdn Bhd"
            CustMAC : "",
            MerchantApprovalURL : "https://*"
            MerchantUnApprovalURL : "https://*"
            MerchantCallbackUrl : "https://*" // server callback url
            LanguageCode : "MY" | "EN" | "CN" ...
            PageTimeout : "780" // timeout in seconds
            CardHolder : "",
            CardNo : "",
            CardExp : "",
            CardCvv2 : "",
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
            PreCheckoutId : "",
            PaymentTimeout : -1
            sdkTimeout: 60 // seconds
            _finaliseMessage: "Optional message for Finalising Payment (iOS Only)"
            _cancelMessage: "Optional message for Cancelling Payment (iOS Only)"
        },
        function (resp) {
            // Success callback
            // resp is the resultCode from the Android SDK on Android; undefined on
            // iOS.
        },
        function (err) {
            // Failure callback
            // err is either a string or `-999` on iOS;
            // on Android:
            //     1 = Transaction failed
            //     2 = Transaction Pending
            //     -999 = Transaction cancelled
            //     <other-integer> = The resultCode from eGHL's Android SDK, if a
            //          message string was not found.
            //     "an error message" = error message
        }
    );
}
