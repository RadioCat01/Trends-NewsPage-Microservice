import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private kc: Keycloak | undefined;
  private profile: UserProfile | undefined;

  get keycloak(){
    if(!this.kc){
      this.kc = new Keycloak({
        url: 'http://localhost:9098',
        realm: 'News-Page',
        clientId: 'News-service'
      })
    }

    return this.kc
  }
  get UserProf():UserProfile | undefined{
    return this.profile;
  }

  async init(){

    const authenticated = await this.keycloak.init({
      onLoad: 'login-required'
            }
      );

        if(authenticated){
          this.profile = (await this.keycloak.loadUserProfile()) as UserProfile;
          this.profile.token = this.keycloak?.token;
        }

  }

  login():Promise<void>{
    return this.keycloak?.login();
  }

  logout():Promise<void>{
    const redirectUri = window.location.origin + '/logout';
    return this.keycloak?.logout();
  }


}
