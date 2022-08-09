<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Email;
use App\Http\Requests\StoreEmailRequest;
use App\Http\Requests\UpdateEmailRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\Mail\Seller;
use App\Mail\Delivery;
use App\Models\AllUser;
class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmailRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmailRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Email  $email
     * @return \Illuminate\Http\Response
     */
    public function show(Email $email)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Email  $email
     * @return \Illuminate\Http\Response
     */
    public function edit(Email $email)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmailRequest  $request
     * @param  \App\Models\Email  $email
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmailRequest $request, Email $email)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Email  $email
     * @return \Illuminate\Http\Response
     */
    public function destroy(Email $email)
    {
        //
    }
    public function sendEmail(Request $request){
        $myEmail = $request->email;
       
        $st = new AllUser();
        $st->name = $request->name;
        $st->email = $request->email;
        $st->phone = $request->phone;
        $st->nid = $request->nid;
        $st->address = $request->address;
        $st->password =$request->password;
        $st->type = "deliveryman";
        $st->status = "active";
        if($st)
        {
            $st->save();
            $details = [
                'title' => $st->name,
                'email' => $st->email,
                'password' => $st->password,
            ];
      
            Mail::to($myEmail)->send(new Seller($details));
            return "Deliveryman Successfuly registered";
        }
        return "Something went wrong";
   
        
}
public function SellerEmail(Request $request){
    $myEmail = $request->email;
   
    $st = new AllUser();
    $st->name = $request->name;
    $st->email = $request->email;
    $st->phone = $request->phone;
    $st->nid = $request->nid;
    $st->address = $request->address;
    $st->password =$request->password;
    $st->type = $request->type;
    $st->status = $request->status;
    if($st)
    {
        $st->save();
        $details = [
            'title' => $st->name,
            'email' => $st->email,
            'password' => $st->password,
        ];
  
        Mail::to($myEmail)->send(new Seller($details));
        return "Deliveryman Successfuly registered";
    }
    return "Something went wrong";

    
}

public function DeliveryEmail(Request $request){
    $myEmail = $request->email;
   
    $st = new AllUser();
    $st->name = $request->name;
    $st->email = $request->email;
    $st->phone = $request->phone;
    $st->nid = $request->nid;
    $st->address = $request->address;
    $st->password =$request->password;
    $st->type = $request->type;
    $st->status = $request->status;
    if($st)
    {
        $st->save();
        $details = [
            'title' => $st->name,
            'email' => $st->email,
            'password' => $st->password,
        ];
  
        Mail::to($myEmail)->send(new Delivery($details));
        return "Deliveryman Successfuly registered";
    }
    return "Something went wrong";

    
}
}