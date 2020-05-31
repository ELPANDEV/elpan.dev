<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'layouts.app');
Route::view('/portfolio', 'layouts.app');
Route::view('/about', 'layouts.app');
Route::view('/about/education', 'layouts.app');
Route::view('/about/experience', 'layouts.app');
Route::view('/contact', 'layouts.app');
Route::view('/contact/whatsapp', 'layouts.app');
Route::view('/contact/email', 'layouts.app');
Route::view('/contact/form', 'layouts.app');
