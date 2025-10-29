$Name = "Assignment_"
$StartNumber = 1
$EndNumber = 5

for ($index = $StartNumber; $index -lt ($EndNumber+1); $index++)
    {
        if ( !(Test-Path -LiteralPath "./$Name$index") ) {
            New-Item -ItemType Directory -Path "./$Name$index"
            Write-Output "$Name$index created."
        } else {
            Write-Output "$Name$index exists already!"
        }
    }


::This should jump over this comment:
goto : commentEnd

    $num =
    $dirName = "$Prefix$num"
    $target = Join-Path -Path $fullPath -ChildPath $dirName

    if (Test-Path -LiteralPath $target) {
        if ($Overwrite) {
            Remove-Item -LiteralPath $target -Recurse -Force

:commentEnd