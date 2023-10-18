#include <stdio.h>

int main()
{
    int n = 73423, rem, sum = 0,r;
    r = n%10;  //  3
    while (n!=0)
    {
        rem = n%10;    // 3   2    4   3   7
        sum = sum+rem;
        n = n/10;    //  0
    }
    printf("Sum is %d",sum);
        return 0;
}