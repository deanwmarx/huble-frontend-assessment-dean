$(document).ready(function () {
    let num1 = null;
    let num2 = null;
    let operator = '';
    let result = 0;

    const calculate = a => operatorStr => b => {
        switch (operatorStr) {
            case '+': return a + b
            case '-': return a - b
            case '/': return a / b
            case '*': return a * b
        }
    }
    
    $('.calculation').html(0);
    $('.result').html(result);

    var timeout = null;
    $('.inputs input').on('keyup', function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (num1 === null || operator == '') {
                num1 = $(this).val();
                num1Int = parseInt(num1);
                $('.calculation').html(`${num1} `);
            } else if (num1 != null && operator != '') {
                num2 = $(this).val();
                num2Int = parseInt(num2);
                $('.calculation').html(`${num1} ${operator} ${num2}`);
                result = calculate(num1Int)(operator)(num2Int);
                $('.result').html(result);
                $(this).val(null);
                num1 = null;
                operator = '';
            }
        }, 750);
    });

    $('.operators button').click(function(){
        if (num1 != null) {
            operator = $(this).val();
            $('.calculation').html(`${num1} ${operator}`);
            $('.inputs input').val('');
            $('.inputs input').focus();
        } else {
            alert('Input your first number');
        }
    });
});