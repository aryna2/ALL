#include <stdio.h>

int main()
{
    int n = 8, i;
    if (n == 1 || n == 2)
    {
        printf("Number is prime");
    }
    for (i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            printf("Number is non-prime");
            break;
        }
        else
        {
            printf("Number is prime");
            break;
        }
    }
    return 0;
}