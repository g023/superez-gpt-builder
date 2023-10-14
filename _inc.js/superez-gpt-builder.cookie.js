function create_cookie( name, value, expires )
{
    path = '/';
    domain = '';
    secure = false; // this should be true for https sites
    var cookie_string = name + "=" + escape ( value );
    if ( expires )
        cookie_string += "; expires=" + expires.toGMTString();
    if ( path )
        cookie_string += "; path=" + escape ( path );
    if ( domain )
        cookie_string += "; domain=" + escape ( domain );
    if ( secure )
        cookie_string += "; secure";
    document.cookie = cookie_string;
    console.log('cookie_string', cookie_string);
}

function get_cookie( cookie_name )
{
    var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
    if ( results )
        return ( unescape ( results[2] ) );
    else
        return null;
}

function erase_cookie( cookie_name )
{
    var cookie_date = new Date ( );  // current date & time
    cookie_date.setTime ( cookie_date.getTime() - 1 );
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}
