<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Token;
use App\Http\Requests\StoreTokenRequest;
use App\Http\Requests\UpdateTokenRequest;
use App\Models\AllUser;
use Illuminate\Support\Str;
use DateTime;

class TokenController extends Controller
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
     * @param  \App\Http\Requests\StoreTokenRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTokenRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function show(Token $token)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function edit(Token $token)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTokenRequest  $request
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTokenRequest $request, Token $token)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function destroy(Token $token)
    {
        //
    }
    public function  APILogin(Request $req){

        $user = AllUser::where('email',$req->email)->where('password',$req->password)->first();
        if($user){
            $api_token = Str::random(64);
            $token = new Token();
            $token->u_id = $user->id;
            $token->token = $api_token;
            $token->created_at = new DateTime();
            $token->save();
            return $value=[
                'type'=>$user->type,
                'token'=>$token,
            ];
        }
        return "No user found";

    }
    public function  logout(Request $request){

        $token = Token::where('token',$request->token)->first();

        if($token){
            $token->expired_at = new DateTime();
            $token->save();
            return "Logout";
        }

    }

    public function  APILogout(Request $request){

        $token = Token::where('token',$request->token)->first();

        if($token){
            $token->updated_at = new DateTime();
            $token->save();
            return "Logout";
        }

    }
}
