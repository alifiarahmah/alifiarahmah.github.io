---
title: 'Bangkit Notes #1 - Programming Basics to become a Software Developer'
excerpt: 'My notes on Bangkit self-paced courses, part 1'
date: '2023-08-15'
slug: 'bangkit-notes-1-programming-basics-to-become-a-software-developer'
---

This is the note I take as I learn from this course
[Memulai Dasar Pemrograman untuk Menjadi Pengembang Software](https://www.dicoding.com/academies/237) on Dicoding to fulfill the requirements of Bangkit program.

# Programming Basics to be a Software Developer

## Understanding Requirements

### Understanding User Needs

For decades, humans always invent tools to ease their work. From inventing wheels to move things in prehistoric era back then, until all the technology advancement we have now. Website are also one of human inventions, made to ease up various human needs like interacting with people far away and business stuffs like online transactions.

In software development, there are several processes that we could follow along to make sure our application is well-developed and stay relevant to user needs, which is called Software Development Life Cycle (SDLC).

1. Planning
2. Analysis
3. Design
4. Development
5. Testing
6. Deployment
7. Maintenance

Every steps are important and the outcomes of a steps will affect the outcome of next steps.To discover user needs, we need documents like User Requirements Specification (URS) or User Requirement Document (URD) that are not full of jargons yet, because its main purpose is to communicate user needs to the stakeholders so it has to be easily understood by everyone.

To do requirement analysis, there are several methods that we can use:

1. Interview

   There are several ways to do user interview:

   - Master-appretince relationship, where the master teach something to the apprentice.
   - Ask someone to told us what to do
   - Observe their obstacles in doing certain activities

2. User Stories

   Writing stories in POV of user.

3. Straw Man Documents

   Tell the ideas without writing any code. We can use several media like storyboards, flowcharts, or mock-up.

4. Prototyping

   Creating mockup that focuses on its main functionality.

### Technical Specification

Besides URS, there are also technical documents that provides software specification, with lots of technical terms.

There are several principles to create a technical specification:

1. Clear
2. Unambiguous
3. Easy to understand
4. Complete
5. Consistent

Every application stakeholders have their own needs, thus we need to know their needs based on their POVs:

- Developer: Need clarity and detials of the specification
- Client/User: Also needs to know the technical stuffs in simple words that are easy to understand
- Legal: Need to put clear acceptance criteria.

Sometimes, the software implementation is not always like expected, so we also need plan B, also known as contingency plan.

### Tips

There are some tips to do research, analyze, and evaluating user needs:

- Good communication
- Do some research first
- Take notes!

## Modification Planning

### Software Requirement Specification (SRS)

SRS is a document made before developing software. It contains how the application works and the functional and non-functional requirements. With SRS, every stakeholders, like developers, end users, and even investors can have a big picture of the application.

Functional requirements consists of all functions of the application, while non-functional requirements consits of requirements to support functional requirements.

SRS documents, based on IEEE 1998 standard, have several parts:
- Introduction
- Glossary
- User Requirements
- System Architecture
- System Requirements
- System Models
- System Evolution
- Appendices

### Application Workflow

Based on what language we use, code are either compiled or interpreted. Compiled code are converted to executable file to run, while interpreted code are converted to machine code line by line. Thus, interpreted code are slower than compiled code. The example of compiled language are C, C++, C#, Swift, and Java, while interpreted language are Javascript, Python, PHP, and Ruby.

Programs are basically a bunch of instructions to do something. To make a program, we need to know the basic workflow of what we want to make.Our program could be either simple or complex, based on the complexity of the problem we want to solve. In order to build a program, we could split the program into several parts.

### Computational Thinking

To build a program, we need to do computational thinking, which consists of:

- Decomposition
- Pattern recognition
- Abstraction
- Algorithm design

- Evaluation

### Flowchart

Flowchart is a diagram that shows the flow of a program.

The benefits of using flowchart are:
- Helping developers to analyze and debug the workflow before writing the code
- Act as a blueprint of the program
- Helping programmer to do maintenance
- Ease the communication to all team members

### Tips

There are several tips to collaborate with team:

- Effective communication
- Build trust
- Give your spirit
- Discuss first
- Avoid slow response
- Priority management

## Programming Basic Concepts

There are several programming basic concepts, including:
1. Syntax and case-sensitive
2. Statement and whitespace
3. Keyword and pseudocode
4. Variables
5. Data types
6. Comparison-onditionals
7. Loops

To learn, there are several tips:
- Time management
- Pay attention to our learning environment
- Start small

## Software Modification

This part mostly consists of HTML and CSS. HTML is a markup language used to build website. CSS is a styling language that can be used to style our HTML page.

It's very recommended to be curious of how other program works.

## Program Documentation

### Versioning

There are several tools that can be used to do versioning of the program, one of them that mostly used is git. There are several git services, like GitHub, Bitbucket, and Gitlab.

### Style Guide

To be good, we should make sure our code can be understood by other team. To make sure the developers could have the same style, we can create our own style guide or adopt style guide that are used by big companies. A style guide that are agreed and recommended by lots of developer is called code convention.

### Comments

Basically, comments are part of code that won't be executed, and used to give notes regarding the code to the developers. Other than that, comments could be used to made a block of code inactive, for development and debugging purposes. Not all code should be commented, especially for the obvious ones.

### Documentation

There are several types of documentation:
- End-user support
- Marketing support
- Development support
- Organization support

We can use documentation generator to help us building the documentation, like JSDoc 3 for Javascript, which works by using comments to our code to build the documentation.