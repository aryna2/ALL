#include <stdio.h>

int main()
{
    int a = 5, b = 6;
    // LOgical AND (&&) -> true+true = true
    // printf("%d\n", a < 5 && b > 7);
    // printf("%d\n", a < 6 && b < 7);
    // printf("%d\n", a < 5 && b < 7);
    // printf("%d\n", a > 4 && b < 5);

    // LOgical OR (||) -> false+false = false
    // printf("%d\n", a < 5 || b > 7);
    // printf("%d\n", a < 6 || b < 7);
    // printf("%d\n", a < 5 || b < 7);
    // printf("%d\n", a > 4 || b < 5);

    // NOT (!)
    printf("%d\n", !(a == 5));
    printf("%d\n", !(a == 4));
    return 0;
}