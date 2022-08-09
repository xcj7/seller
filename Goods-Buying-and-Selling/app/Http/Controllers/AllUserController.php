<?php

namespace App\Http\Controllers;
use App\Models\Delivery;
use App\Models\AllUser;
use App\Http\Requests\StoreAllUserRequest;
use App\Http\Requests\UpdateAllUserRequest;
use Illuminate\Http\Request;
class AllUserController extends Controller
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
     * @param  \App\Http\Requests\StoreAllUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAllUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function show(AllUser $allUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function edit(AllUser $allUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAllUserRequest  $request
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAllUserRequest $request, AllUser $allUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(AllUser $allUser)
    {
        //
    }
    public function APIRegistration(Request $request)
    
    {
      
        $user= AllUser::where('type', $request->value)->get();
        if($user)
        {
            return $user;
        }
        return "nothing";
    }
    public function APIRequestedUser(Request $request)
    {
        $user= AllUser::where('status','requested')->get();
        if($user)
        {
            return $user;
        }
        return "nothing";
    }

    public function APIEditUserStatus(Request $request)
    {
        $user= AllUser::where('id', $request->id)->first();
        if($user)
        {
            $user->status = 'accept';
            $user->save();
            return "User Accepted";
        }
        return "nothing";
    }

    public function APIRemoveUser(Request $request)
    {
        $user= AllUser::where('id', $request->id)->first();
        if($user)
        {
           
            $user->delete();
            return "Request Cancelled";
        }
        return "nothing";
    }

    public function APIRegistrationSubmitted(Request $request)
    {
       
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
            return "success";
        }
        else
        {
            return 'nothing';
        }
            
        
    }
    public function APILogin(Request $request)
    {
    
        $stu = AllUser::where('email',$request->email)
                       ->where('password',$request->password)
                        ->first();
        if($stu){
           
            return $stu->type;
        }
        return "Something went wrong";              
    }

    public function APIAdminprofile(Request $request)
    {
        
        $stu = Alluser::where('id',$request->id)->first();
        if($stu)
        {
           return $stu;
        }
        return "nothing found";
    }
   
    public function APIUserEdited(Request $request)
    {
      
        $st = Alluser::where('id',$request->id)->first();
        $st->name = $request->name;
        $st->email = $request->email;
        $st->phone = $request->phone;
        $st->nid = $request->nid;
        $st->address = $request->address;
       if($st)
       {
        $st->save();
        return "Successfuly Updated";
        
       }
      
    }

    public function DeliveryHistory()
    
    {
      
        return Delivery::all();
    }
}
