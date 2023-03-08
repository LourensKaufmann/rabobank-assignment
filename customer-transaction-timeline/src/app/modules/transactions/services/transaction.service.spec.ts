import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ITransactionsApiResponse, TransactionService } from './transaction.service';

const API_URL = 'http://localhost:8080/api/transactions'; // TODO: Move to .env
const API_RESPONSE: ITransactionsApiResponse = {
  days: [
    {
      id: '2022-11-08',
      transactions: [
        {
          id: 1,
          timestamp: '2022-11-08T10:30:47.123456',
          amount: 17.95,
          currencyCode: 'USD',
          currencyRate: 1.173628,
          description: 'Some interesting description',
          otherParty: {
            name: 'Mister X',
            iban: 'NL00RABO0123456789',
          },
        },
        {
          id: 2,
          timestamp: '2022-11-08T12:45:47.123456',
          amount: -25.95,
          currencyCode: 'EUR',
          description: 'Some other interesting description',
          otherParty: {
            name: 'Miss Y',
            iban: 'NL00RABO9876543210',
          },
        },
        {
          id: 3,
          timestamp: '2022-11-08T10:30:47.123456',
          amount: 3456.67,
          currencyCode: 'EUR',
          description: 'Finally payday',
          otherParty: {
            name: 'Company Z',
            iban: 'NL00RABO3210654789',
          },
        },
      ],
    },
    {
      id: '2022-11-07',
      transactions: [
        {
          id: 1,
          timestamp: '2022-11-08T10:30:47.123456',
          amount: 17.95,
          currencyCode: 'USD',
          currencyRate: 1.173628,
          description: 'Some interesting description',
          otherParty: {
            name: 'Mister X',
            iban: 'NL00RABO0123456789',
          },
        },
        {
          id: 2,
          timestamp: '2022-11-08T12:45:47.123456',
          amount: -25.95,
          currencyCode: 'EUR',
          description: 'Some other interesting description',
          otherParty: {
            name: 'Miss Y',
            iban: 'NL00RABO9876543210',
          },
        },
        {
          id: 3,
          timestamp: '2022-11-08T10:30:47.123456',
          amount: 3456.67,
          currencyCode: 'EUR',
          description: 'Finally payday',
          otherParty: {
            name: 'Company Z',
            iban: 'NL00RABO3210654789',
          },
        },
      ],
    },
  ],
};

describe('TransactionService', () => {
  let service: TransactionService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TransactionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling transactionDays should return all transactions from API', () => {
    service.transactionDays.subscribe((transactionDays) => {
      expect(transactionDays.length).toBe(API_RESPONSE.days.length);
    });

    const req = httpTestingController.expectOne(API_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(API_RESPONSE);
  });

  it('calling transactionByIdOnDate should return correct transaction from API', () => {
    service.transactionByIdOnDate(1, '2022-11-08').subscribe((transaction) => {
      expect(transaction.id).toBe(1);
      expect(transaction.timestamp).toBe('2022-11-08T10:30:47.123456');
    });

    const req = httpTestingController.expectOne(API_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(API_RESPONSE);
  });
});
