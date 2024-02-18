import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
actor {

var owner:Principal = Principal.fromText("pmloe-hagez-hwb3f-hih5v-rnyd4-j2bqk-7p2sa-v7pan-5g7pp-7o5zc-5qe")  ;  
var totalSupply : Nat = 1000000000;
var symbol:Text = "DANK";

var balances = HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);

balances.put(owner,totalSupply);

public query func balanceOf(who:Principal): async Nat {
  
  let balance : Nat = switch(balances.get(who)) {
    case null 0;
    case(?result) result;
  };

  return balance;
};

public query func getSymbol():async Text{

return symbol;

};

};
