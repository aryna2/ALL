#include<stdio.h>

int main()
{
    // Ternary Operator / Conditional Operator
    int age;
    printf("Enter your age: ");
    scanf("%d",&age);
    //(condition) ? TRUE : FALSE;
    (age>=18) ? printf("You are eligible for voting") : printf("You are not eligible for voting");
    return 0;
}