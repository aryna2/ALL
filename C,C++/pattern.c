1
{
    int i,j,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("*");
        }
            printf("\n");
    }
    return 0;
}


2
{
    int i,j,n=5;
    for (i=1;i<=n;i++){
        for(j=i;j<=n;j++){
            printf("*");
        }
            printf("\n");
    }
    return 0;
}


3
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(k=1;k<=i;k++){
            printf("*");
        }
        printf("\n");
    }
    return 0;
}


4
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf(" ");
        }
        for(k=i;k<=n;k++){
            printf("*");
        }
        printf("\n");
    }
    return 0;
}


5
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(k=1;k<=i;k++){
            printf(" *");
        }
        printf("\n");
    }
    return 0;
}


6
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=i-1;j++){
            printf(" ");
        }
        for(k=i;k<=n;k++){
            printf(" *");
        }
        printf("\n");
    }
    return 0;
}


7
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(k=1;k<=i;k++){
            if(i==5 || k==1 || k==i){
            printf("* ");
        }
        else{
            printf("  ");
        }
        }
        printf("\n");
    }
    return 0;
}


8
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf(" ");
        }
        for(k=i;k<=n;k++){
            if(i==1 || k==5 || k==i){
            printf("* ");
        }
        else{
            printf("  ");
        }
        }
        printf("\n");
    }
    return 0;
}


9
{
    int i,j,k,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            printf(" ");
        }
        for(k=1;k<=i;k++){
            if(k==1 || k==i){
            printf(" *");
        }
        else{
            printf("  ");
        }
        }
        printf("\n");
    }
    for (i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf(" ");
        }
        for(k=i;k<=n;k++){
            if(k==5 || k==i){
            printf("* ");
        }
        else{
            printf("  ");
        }
        }
        printf("\n");
    }
    return 0;
}


10
{
    int i,j,n=5;
    for (i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i==1 || i==5 || j==1 || j==5){
            printf("*");
            }
            else{
                printf(" ");
            }
        }
            printf("\n");
    }
    return 0;
}