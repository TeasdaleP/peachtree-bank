import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DataResponse, TransactionService } from './transaction.service';
import { environment } from 'src/environments/environment';
import { mockTransactions } from '../helpers/mock.data';

describe('Transaction Service', () => {
  let service: TransactionService;

  let response: DataResponse = {
    data: mockTransactions
  }

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });

    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should verify the HTTP call is of type GET', () => {
    let result;

    service.getTransactions$().subscribe((transactions) => {
      result = transactions;
    });

    const req = httpMock.expectOne(environment.transactionalApi);
    expect(req.request.method).toEqual("GET");
    expect(req.request.url).toEqual(environment.transactionalApi);
    httpMock.verify();
  });

  it('Should return an array of Transactions', (done) => {

    service.getTransactions$().subscribe((transactions) => {
      expect(transactions.data.length).toBe(1);
      expect(transactions).toEqual(response);
      done();
    });

    const req = httpMock.expectOne(environment.transactionalApi);
    expect(req.request.method).toBe("GET");
    req.flush(response);
    httpMock.verify();
  });
});
