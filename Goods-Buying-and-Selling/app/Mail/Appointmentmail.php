<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Appointmentmail extends Mailable
{
    use Queueable, SerializesModels;
    public $body;
    public $sub;
    public function __construct($e_sub , $e_body)
    {
        $this->body=$e_body;
        $this->sub=$e_sub;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('AppointMent Success')->with('body',$this->body)->with('sub',$this->sub);
    }
}
