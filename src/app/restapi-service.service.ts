import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiServiceService {

  constructor(private http:HttpClient) { }

  public getCORONAUsersOfIndia(countryname:string) {
    let url ="https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/"+countryname;
   // alert(" url = "+url);
    return this.http.get(url);
}
}
