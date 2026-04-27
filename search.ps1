# 인코딩 강제 설정 (한글 소스 코드 깨짐 방지)
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 실행 파일 경로 설정
$rgPath = "C:\Users\SKTelecom\UserApps\MyUtils\rg.exe"

# AI 에이전트가 넘긴 모든 인자($args)를 그대로 rg.exe에 전달
if (Test-Path $rgPath) {
    # --smart-case나 --json 등 에이전트에게 유리한 기본 옵션을 여기에 추가 가능
    & $rgPath $args
} else {
    Write-Error "Error: rg.exe를 찾을 수 없습니다. 경로를 확인하세요: $rgPath"
    exit 1
}
