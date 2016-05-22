<script>
//1 
var a1 = [12,32,123,32,123,23];
var a2 = [321,32,123,32,1,2];

//2
var b = [];
var b[0] = [2,2,2,2];
var b[1] = [1,1,1,1];

//3
var c[0] = [];
var c[0][0] = 1;
var c[0][1] = 1;
var c[0][2] = 1;
var c[1] = [];
var c[1][0] = 1;
var c[1][1] = 1;
var c[1][2] = 1;
var c[2] = []
var c[2][0] = 1;
var c[2][1] = 1;
var c[2][2] = 1;

function print(num){
    for (var i = 0;i<num;i++){
        for (var j = 0;j<num;j++){
            console.log(i*j)
        }
    }
}
</script>