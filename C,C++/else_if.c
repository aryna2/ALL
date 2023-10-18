#include<stdio.h>

int main()
{
    int m;
    printf("Enter percentage: ");
    scanf("%d",&m);
    if(m>100){
        printf("Invalid input..!!");
    }
    else if(m>75 && m<=100){
        printf("You are pass with A grade");
    }
    else if(m>55 && m<=75){
        printf("You are pass with B grade");
    }
    else if(m>35 && m<=55){
        printf("You are pass with C grade");
    }
    else{
        printf("You are fail..!!");
    }
    return 0;
}