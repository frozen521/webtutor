var url = 'data/d.txt'
import jquery from 'jquery';

$.ajax({
        url,
        dataType: "json",
        success(arr) {
            console.log(arr)
        }, error(err) {
            console.log(err)
        }
    }
)