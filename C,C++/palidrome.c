#include <stdio.h>

int main()
{
    int n = 1221, temp = n, sum = 0, rem;
    while (n != 0)
    {
        rem = n % 10;         //  1  2  2  1
        sum = sum * 10 + rem; //  1221
        n /= 10;              //  
    }
    if (temp == sum)
    {
        printf("Value is palindrome");
    }
    else
    {
        printf("Value is not palindrome");
    }
    return 0;
}