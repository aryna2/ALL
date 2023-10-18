#include <stdio.h>

int main()
{
    int n = 153, temp = n, sum = 0, rem;
    while (n != 0)
    {
        rem = n % 10;                //  3  5  1
        sum = sum + rem * rem * rem; //  27+125+1
        n /= 10;                     //
    }
    if (temp == sum)
    {
        printf("Value is armstrong");
    }
    else
    {
        printf("Value is not armstrong");
    }
    return 0;
}