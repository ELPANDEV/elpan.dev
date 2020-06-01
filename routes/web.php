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
Route::view('/portfolio/webs', 'layouts.app');
Route::view('/portfolio/apps', 'layouts.app');
Route::view('/skills', 'layouts.app');
Route::view('/skills/languages', 'layouts.app');
Route::view('/skills/technologies', 'layouts.app');
Route::view('/skills/frameworks', 'layouts.app');
Route::view('/contact', 'layouts.app');
Route::view('/contact/whatsapp', 'layouts.app');
Route::view('/contact/email', 'layouts.app');
Route::view('/contact/form', 'layouts.app');
