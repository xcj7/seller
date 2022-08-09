<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AllUserController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login',[TokenController::class,'APILogin']);
Route::post('/logout',[TokenController::class,'APILogout']);
Route::get('/registration/{value}',[AllUserController::class,'APIRegistration']);
Route::post('/registration',[AllUserController::class,'APIRegistrationSubmitted']);
Route::get('/profile/{id}',[AllUserController::class,'APIAdminprofile']);
Route::post('/update',[AllUserController::class,'APIUserEdited']);
Route::get('/request',[AllUserController::class,'APIRequestedUser']);
Route::get('/request_accept/{id}',[AllUserController::class,'APIEditUserStatus']);
Route::get('/request_remove/{id}',[AllUserController::class,'APIRemoveUser']);
Route::get('/delivery',[AllUserController::class,'DeliveryHistory']);
Route::get('/order',[OrderController::class,'APIOrder']);
Route::get('/product',[ProductController::class,'APIProducts']);
Route::get('/ordered_user/{id}',[OrderController::class,'APIOrderedUser']);
Route::post('/email',[EmailController::class,'sendEmail']);
//tushar
Route::get('/delete_product/{id}',[ProductController::class,'delete_product']);
Route::post('/product_edited',[ProductController::class,'product_edited']);
Route::get('/APIProduct_details/{id}',[ProductController::class,'APIProduct_details']);
Route::get('/products/list',[ProductController::class,'APIList']);
Route::post('/products/list',[ProductController::class,'APIPost'])->name('ProductAdd');//->middleware('ValidShop');
Route::post('/logoutt',[TokenController::class,'logout']); 
Route::post('/seller_email',[EmailController::class,'SellerEmail']);
Route::post('/delivery_email',[EmailController::class,'DeliveryEmail']);

Route::get('/orders/list',[ProductController::class,'OrderList']);

Route::get('/delete_order/{id}',[ProductController::class,'delete_order']);
Route::get('/accept_order/{id}',[ProductController::class,'accept_order']);
Route::get('/detail_orderlist/{id}',[ProductController::class,'detail_orderlist']);
