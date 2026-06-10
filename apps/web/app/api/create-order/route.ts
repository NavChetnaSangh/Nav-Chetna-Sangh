import {NextRequest, NextResponse} from "next/server"

export async function POST(request : NextRequest){
    const { amount } = await request.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if(!amount || amount < 1) {
        return NextResponse.json({error : "Invalid amount"}, { status: 400});
    }

    if(!keyId || !keySecret){
        return NextResponse.json({error: "Payment gateway not configured "}, { status: 500});
    }
   try {
     const credentials = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
 
     const response = await fetch("https://api.razorpay.com/v1/orders",{
         method:"POST",
         headers:{
             "authorization" : `Basic ${credentials}`,
             "content-type" : "application/json"
         },
         body: JSON.stringify({
             amount : amount * 100,
             currency: "INR",
             receipt: `receipt_${Date.now()}`,
         })
     })
 
     const order = await response.json();
 
     if(response.ok) {
         return  NextResponse.json({
             orderId: order.id,
             amount: order.amount,
             currency: order.currency,
             keyId
 
         });
     }
     else{
        return NextResponse.json({error: "Failed to create order"}, {status: 500});
     }
   } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json({ error: "INternal Server Error"}, {status: 500})
    
   }
}