<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/students', [StudentController::class, 'index'])->name('students');

Route::post('/students', [StudentController::class, 'store'])->name('students.store');

Route::get('/students/{id}', [StudentController::class, 'show'])->name('students.show');

Route::get('/attendance', function () {
    return Inertia::render('Attendance');
})->name('attendance');

Route::get('/grades', function () {
    return Inertia::render('Grade');
})->name('grades');
