#include <stdio.h>

int main()
{
    int a = 10, b = 3;
    int option;
    printf("Please select option 1 for Addition\n");
    printf("Please select option 2 for Subtraction\n");
    printf("Please select option 3 for Multiplication\n");
    printf("Please select option 4 for Division\n");
    printf("Enter your choice: ");
    scanf("%d", &option);

    switch (option)
    {
    case 1:
        printf("Addition of %d and %d is %d\n", a, b, a + b);
        break;
    case 2:
        printf("Subtraction of %d and %d is %d\n", a, b, a - b);
        break;
    case 3:
        printf("Multiplication of %d and %d is %d\n", a, b, a * b);
        break;
    case 4:
        printf("Division of %d and %d is %d\n", a, b, a / b);
        break;
    default:
        printf("Please enter valid option..!!");
        break;
    }

    return 0;
}