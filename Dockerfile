FROM compulim/iisnode

COPY . C:\\site
RUN powershell -NoProfile -Command Import-module IISAdministration; New-IISSite -Name 'Production Site' -PhysicalPath C:\site -BindingInformation '*:8000:'

EXPOSE 8000