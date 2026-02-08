<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return inertia('Student', ['students' => $students]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'school_id' => 'required|string|regex:/^[A-Z0-9-]+$/',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'middle_initial' => 'nullable|string|max:10',
            'address' => 'required|string',
            'email' => 'required|email|unique:students,email',
            'gender' => 'required|in:male,female,other',
        ]);

        $student = Student::create($validated);

        return redirect()->back()->with('success', 'Student added successfully!');
    }

    public function show($id)
    {
        $student = Student::findOrFail($id);
        return inertia('StudentDetails', ['student' => $student]);
    }
}
