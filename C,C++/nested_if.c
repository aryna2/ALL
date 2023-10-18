#include <stdio.h>

int main()
{
    int a = 160, b = 63, c = 34;
    if (a > b)
    {
        if (a > c)
        {
            printf("A is greater");
        }
        else
        {
            printf("C is greater");
        }
    }
    else
    {
        if (b > c)
        {
            printf("B is greater");
        }
        else
        {
            printf("C is greater");
        }
    }
    return 0;
}