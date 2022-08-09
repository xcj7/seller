<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\Order;
use App\Models\Orderdetail;
use App\Http\Requests\StoreproductRequest;
use App\Http\Requests\UpdateproductRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

////

// use Illuminate\Support\Facades\DB;
// use Redirect,Response,File;
 
// use Illuminate\Support\Facades\Storage;
////


class ProductController extends Controller
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
     * @param  \App\Http\Requests\StoreproductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreproductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateproductRequest  $request
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateproductRequest $request, product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(product $product)
    {
        //
    }
    public function APIList(){
       
        // console.log("ddddddddddddddddddd"); 
        return Product::all();
    }
    public function APIPost(Request $req){
       // console.log("cccccccccccccccc"); 
        // $karimdata=$request->session()->get('karimkey');
        $karimdata=Session::get('karimkey');
       
        $req->file('image');
        $fileName="";
        if ( $req->has('image')){
            $image = $req->file('image');
           
            $fileName = $image->getClientOriginalName() . time() . "." . $image->getClientOriginalExtension();
            $image->move('./shop/', $fileName);    
        }
       
        $product = new Product();
        $product->shop_id = $req->shop_id;
        $product->p_name = $req->p_name;
        $product->image = $fileName;
        $product->p_type = $req->p_type;

        $product->status = $req->status;
        $product->p_description = $req->p_description;
        $product->p_qty = $req->p_qty;
        $product->p_price = $req->p_price;
        $product->p_offer = $req->p_offer;
       




        if( $product->p_price > 0)
        {
            $product->save();
        }

      
    

        return  $product;
    }







    public function APIProduct_details(Request $request)
    {
        
        $stu = product::where('id',$request->id)->first();
        if($stu)
        {
           return $stu;
        }
    }

    

    public function delete_product(Request $request)
    {
        
        $stu = product::where('id',$request->id)->first();
$id=$request->id;
        // if($stu)
        // {
        //    return $stu;
        // }

        if($stu){
            // product::find($stu)->destroy();
            product::destroy($id);
        }
    }
 

    public function product_edited(Request $req)
    {
       // print_r($req);
        // $value = $request->session()->get('user');
        $product = product::where('id',$req->id)->first();

        $req->file('image');
        $fileName="";
        if ( $req->has('image')){
            $image = $req->file('image');
           
            $fileName = $image->getClientOriginalName() . time() . "." . $image->getClientOriginalExtension();
            $image->move('./shop/', $fileName);    
        }
       
        
        $product->p_name = $req->p_name;
        $product->p_price = $req->p_price;
        $product->image = $fileName;

        $product->p_type = $req->p_type;

        $product->status = $req->status;
        $product->p_description = $req->p_description;
        $product->p_qty = $req->p_qty;
        $product->p_price = $req->p_price;
        $product->p_offer = $req->p_offer;

       if($product)
       {
        $product->save();
        // return redirect()->route('profile');
       }
      
    }
    public function APIProducts(){
        return Product::all();
    }


    public function OrderList(){
       
     
        return Order::all();
    }

    
    public function delete_order(Request $request)
    {
        
        $stu = Order::where('id',$request->id)->first();
$id=$request->id;
        // if($stu)
        // {
        //    return $stu;
        // }

        if($stu){
            // product::find($stu)->destroy();
            Order::destroy($id);
        }
    }


    public function accept_order(Request $request)
    {
        
        $stu = Order::where('id',$request->id)->first();
$id=$request->id;
        // if($stu)
        // {
        //    return $stu;
        // }

        if($stu){

            // $stu->u_id = $req->p_name;
            // $stu->Price = $req->p_price;
            $stu->status = "accepted";
            $stu->save();
   
          
        }
    }


    public function detail_orderlist(Request $request)
    {
        
        // print_r($request->id);

//         $order = Order::where('id',$request->id)->first();

// $detail_order = Orderdetail::where('id',$order->id)->first();

// $product = Orderdetail::where('id',$detail_order->p_id)->first();


//         // if($stu)
//         // {
//         //    return $stu;
//         // }

//         if($stu){

//             // $stu->u_id = $req->p_name;
//             // $stu->Price = $req->p_price;
//             $stu->status = "accepted";
//             $stu->save();
   
          
//         }


      
        $posts = DB::table('orderdetails')
        ->join('products', 'orderdetails.p_id', '=', 'products.id')
        // ->join('ranks', 'users.rank_id', '=', 'ranks.id')
        // ->join('regions', 'users.region_id', '=', 'regions.id')
        //->join('postcomments', 'posts.id', '=', 'postcomments.post_id')
        ->select(
            'orderdetails.o_id as order_id',
            'orderdetails.qty as order_qty',
            'orderdetails.price as order_qty_total_price',
            'products.p_name as product_name',
            'products.status as product_status',
            'products.p_price as p_price',
           
          //'postcomments.comment as postcomment',
          //'postcomments.author_id as commentauthor'
          )
        ->where('orderdetails.o_id', '=', $request->id)
        ->get();
        // print_r($posts);
        return $posts;






    }

    
}

   

