#include <stdio.h>

int main()
{
    int i, fact = 1;
    for (i = 1; i <= 5; i++)
    {
        
        fact *= i;    //   24*5
    }
    printf("Factorial is %d", fact);
    return 0;
}